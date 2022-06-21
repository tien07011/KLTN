import moment from "moment";

const formatDateTime = (language, datetime, format) => {
  return moment(datetime).locale(language).format(format);
};

export default {
  formatDateTime,
};
