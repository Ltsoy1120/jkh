import { HouseData } from "../../../../../../models/IHouse";
import Remove from "../../../../../Buttons/CircleButtons/Remove";
import AddGroupOfFiles from "../../../../../AddGroupOfFiles";
import { apiURL } from "../../../../../../config";
import styles from "../style.module.scss";

interface PhotosInfoProps {
  state: HouseData;
  removeFile: (index: number, name: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotosInfo: React.FC<PhotosInfoProps> = ({
  state,
  removeFile,
  handleFileChange,
}) => {
  return (
    <div className={styles.docs}>
      <p className={styles.label}>Фото</p>
      {state.photos[0] &&
        state.photos.map((photo, index) =>
          typeof photo === "string" ? (
            <span id={photo} key={`photos${index}`} className={styles.file}>
              <img src={apiURL + "/uploads/" + photo} />
              <Remove onClick={() => removeFile(index, "photos")} />
            </span>
          ) : (
            <span
              id={`photos${index}`}
              key={`photos${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(photo)} />
              <Remove onClick={() => removeFile(index, "photos")} />
            </span>
          )
        )}
      <AddGroupOfFiles
        label="Добавить группу фотографий"
        name="photos"
        onChange={handleFileChange}
      />
    </div>
  );
};
export default PhotosInfo;
