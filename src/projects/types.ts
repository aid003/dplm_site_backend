export interface UploadedProjectFile {
  /** Оригинальное имя файла, присланное клиентом */
  originalname: string;
  /** MIME-тип, определённый клиентом/сервером */
  mimetype: string;
  /** Размер файла в байтах */
  size: number;
  /** Имя файла, присвоенное Multer (при diskStorage) */
  filename?: string;
  /** Путь к файлу (если diskStorage) */
  path?: string;
}


