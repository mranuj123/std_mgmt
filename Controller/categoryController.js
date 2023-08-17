const Category = require('../Model/Category');

// Create new category
exports.postCategory = async (req, res) => {
  
    try {
       
        // const existingCategory = await Category.findOne({ Category_name: req.body.Category_name });
      

        // if (existingCategory) {
        //     return res.status(400).json({ error: 'Category must be unique' });
        // }
     
        const category = new Category({
            Category_name: req.body.Category_name,
            Category_des: req.body.Category_des
        });

        console.log("kkkk",category)
       

        const savedCategory = await category.save();

        if (!savedCategory) {
            return res.status(400).json({ error: 'Something went wrong' });
        }

        res.send(savedCategory);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};
