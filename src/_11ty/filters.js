module.exports = (config) =>{
  config.addFilter("isoString", dateObj => new Date(dateObj).toISOString());
  config.addFilter("localeDateTime", (dateObj, dateStyle = "long") => new Date(dateObj).toLocaleDateString([], { dateStyle }));
};
