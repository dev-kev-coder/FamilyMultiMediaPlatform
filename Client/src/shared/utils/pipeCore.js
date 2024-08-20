export const pipe = (val) => {
  return pipeValue(val, null);
};

const pipeValue = (val, err) => {
  return {
    value: val,
    error: err,
    to: (callback, ...args) => {
      // This early return skips further execution down the pipeline
      // if (this.error) return this;
      if (err) return this;

      try {
        // const newValue = callback(this.val, ...args);
        const newValue = callback(val, ...args);
        return pipeValue(newValue, null);
      } catch (e) {
        return pipeValue(null, e);
      }
    },
  };
};
