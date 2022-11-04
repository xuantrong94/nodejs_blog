let getHomepage = (req, res) => {
    //logic
  return res.render("index.ejs");
};
let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};
// export { getHomepage, getAboutPage };

const homeController = {
  getHomepage,
  getAboutPage
}
export default homeController