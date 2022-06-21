import { ApiConstant } from "const";

export const getAttachmentUrl = (imagePath) =>
  ApiConstant.IMAGE_ROOT_URL + imagePath;
