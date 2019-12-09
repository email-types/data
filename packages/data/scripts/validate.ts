(async () => {
  try {
    const { developers } = await import('../src/misc/developers');
    const { doctypes } = await import('../src/misc/doctypes');
    console.log(developers, doctypes);
  } catch (error) {
    console.log(error);
  }
})();
