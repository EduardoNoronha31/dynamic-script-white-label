function scriptValidation(scriptData) {
  if (!scriptData.src) {
    throw new Error("The property src should have a valid value");
  }

  if (typeof scriptData.isAsync !== "boolean") {
    throw new Error("The property isAsync should be a boolean value");
  }

  if (!document) {
    throw new Error(
      "Have an error in script creation. Make sure the document object is being generated correctly"
    );
  }
}

const createSrcScript = (scriptData) => {
  scriptValidation(scriptData);

  const scriptSrc = document.createElement("script");

  scriptSrc.setAttribute("src", scriptData.src);

  if (scriptData.isAsync) {
    scriptSrc.setAttribute("async", true);
  }

  document.head.appendChild(scriptSrc);
};

module.exports = {
  createSrcScript,
};

createSrcScript({ src: "Hello world", isAsync: true });
