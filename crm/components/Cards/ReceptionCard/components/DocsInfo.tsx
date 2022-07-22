import Remove from "../../../Buttons/CircleButtons/Remove";
import { apiURL } from "../../../../config";
import styles from "../style.module.scss";

interface DocsInfoProps {
  files: string[];
}

const DocsInfo: React.FC<DocsInfoProps> = ({ files }) => {
  return (
    <div className={styles.files}>
      {files[0] &&
        files.map((file, index) =>
          typeof file === "string" ? (
            <span id={file} key={file} className={styles.file}>
              <img src={apiURL + "/uploads/" + file} />
            </span>
          ) : (
            <span
              id={`files${index}`}
              key={`files${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(file)} />
            </span>
          )
        )}
    </div>
  );
};
export default DocsInfo;
