const express = require('express')
const router = express.Router();
const {addPage, wikiPage} = require("../views");
const {Page} = require('../models');


router.get('/', async (req, res, next)=>{
  const found = await Page.findAll()

  res.send(wikiPage(found));
})

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.pageContent
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next)=>{
  res.send(addPage());
})

router.get('/:slug', async (req, res, next)=>{
  try{
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    })
    res.json(page)
  } catch(error) {next(error)}
})


module.exports = router
