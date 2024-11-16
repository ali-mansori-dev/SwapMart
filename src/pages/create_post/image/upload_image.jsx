import Image from "./preview_image";
import { makeBlob } from "../../../utils/blob";
import PropTypes from "prop-types";
import Supabase from "../../../lib/helper/ClientSupabase";
import useAlert from "../../../hooks/useAlert";
import AlertComponent from "../../../components/alert_component";
import { get_file_extension } from "../../../utils/file";
import download_image from "../../../assets/icon/download-outline.svg";

const UploadImages = ({ images, setImages, uploadImageFn: noname }) => {
  const [alert, setAlert] = useAlert();

  async function handleChange(e) {
    const inputFiles = e.target.files;
    if (inputFiles.length > 0) {
      Array.from(inputFiles).forEach(async (file) => {
        const ext = get_file_extension(file.name);
        if (ext !== "jpg")
          return setAlert("error", `image ${ext} type not supported`);

        const maxSize = 120 * 1024;
        if (file.size > maxSize) {
          return setAlert("error", `file size not should over 120KB`);
        }

        if (images.length >= 2) {
          return setAlert("error", `you can only select 2 image`);
        }

        //file name
        const fileName = `${Date.now()}.${ext}`;
        const url = `${
          import.meta.env.VITE_SUPABASE_URL
        }/storage/v1/object/images/${fileName}`;

        const blob = makeBlob(file);
        setImages([
          ...images,
          {
            url,
            blob,
            uploaded: false,
            percent: 0,
          },
        ]);

        const headers = {
          Authorization: `Bearer ${
            (await Supabase.auth.getSession()).data.session.access_token
          }`,
          "Content-Type": file.type,
        };

        const req = new XMLHttpRequest();
        req.upload.onprogress = updateProgress;
        req.onload = transferComplete;
        req.onerror = transferFailed;
        req.open("POST", url);
        for (const [key, value] of Object.entries(headers)) {
          req.setRequestHeader(key, value);
        }
        req.send(file);

        function updateProgress(e) {
          const pct = (e.loaded / e.total) * 100;
          setImages([
            ...images.filter((item) => item.url !== file.url),
            {
              url,
              blob,
              uploaded: false,
              percent: pct,
            },
          ]);
        }

        function transferComplete() {
          setImages([
            ...images.filter((item) => item.url !== file.url),
            {
              url,
              blob,
              uploaded: true,
              percent: 100,
            },
          ]);
        }

        function transferFailed() {
          console.error("Upload failed.");
        }
      });
    }
  }

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="label">
        <span className="label-text text-primary-70 text-sm pb-1">Photo</span>
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        <label
          className="flex w-24 h-24 cursor-pointer appearance-none justify-center rounded-md border border-dashed border-spacing-[2rem] border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
          tabIndex="0"
        >
          <span
            htmlFor="photo-dropbox"
            className="flex items-center space-x-2 text-primary-50"
          >
            <img
              src={download_image}
              className="w-8 rotate-180 text-primary-50"
            />
          </span>
          <input
            id="photo-dropbox"
            type="file"
            multiple
            accept="image/jpeg,image/png/image/webp"
            className="sr-only"
            onChange={handleChange}
          />
        </label>
        {images?.length > 0 &&
          images.map((value, index) => {
            return <Image key={index} {...value} />;
          })}
      </div>
      <AlertComponent data={alert} />
      <div className="label">
        <span className="text-gray-400 text-xs">
          only .png file accepted <br /> choose a maximum of 2 photos.
        </span>
      </div>
    </section>
  );
};
UploadImages.propTypes = {
  images: PropTypes.any,
  setImages: PropTypes.any,
  uploadImageFn: PropTypes.any,
};
export default UploadImages;
