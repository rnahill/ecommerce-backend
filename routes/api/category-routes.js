const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {

    const categories = await Category.findAll({
      include: Product,
    });

    res.status(200).json(categories);

  } catch (err) {

    console.error(err);
    res.status(500).json({error: "Error"})

  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });

    res.status(200).json(category);

  } catch (err) {

    console.error(err);
    res.status(500).json({error: "Error"})

  }
});

router.post('/', async (req, res) => {
  // create a new category

  try {

    const newCategory = await Category.create(req.body);

    res.status(201).json(newCategory);

  } catch (err) {

    console.error(err);
    res.status(500).json({error: "Error"})

  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {
     const [updatedRows] = await Category.update(req.body, {
      where: { id: req.params.id },
     });
  }  catch (err) {

    console.error(err);
    res.status(500).json({error: "Error"})

  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  try {

    const deletedCategory = await.destroy({
      where: { id: req.params.id },
    });

  }  catch (err) {

    console.error(err);
    res.status(500).json({error: "Error"})

  }

});

module.exports = router;
