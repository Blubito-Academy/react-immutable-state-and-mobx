import { categories, subcategories } from "../../constants/Categories";

function Form() {
  return (
    <form>
      <div className="myGrid">
        {/* <!-- Title Fields --> */}
        <label>
          Title (EN)
          <input
            type="text"
            name="en.title"
            placeholder="Title (EN)"
            required
          />
        </label>
        <label>
          Title (BG)
          <input
            type="text"
            name="bg.title"
            placeholder="Title (BG)"
            required
          />
        </label>

        {/* <!-- Subtitle Fields --> */}
        <label>
          Subtitle (EN)
          <input
            type="text"
            name="en.subtitle"
            placeholder="Subtitle (EN)"
            required
          />
        </label>
        <label>
          Subtitle (BG)
          <input
            type="text"
            name="bg.subtitle"
            placeholder="Subtitle (BG)"
            required
          />
        </label>

        {/* <!-- Excerpt Fields --> */}
        <label>
          Excerpt (EN)
          <input
            type="text"
            name="en.excerpt"
            placeholder="Excerpt (EN)"
            required
          />
        </label>
        <label>
          Excerpt (BG)
          <input
            type="text"
            name="bg.excerpt"
            placeholder="Excerpt (BG)"
            required
          />
        </label>

        {/* <!-- Description Fields --> */}
        <label>
          Description (EN)
          <input
            type="text"
            name="en.description"
            placeholder="Description (EN)"
            required
          />
        </label>
        <label>
          Description (BG)
          <input
            type="text"
            name="bg.description"
            placeholder="Description (BG)"
            required
          />
        </label>

        {/* Rest of the fields */}

        <label>
          Select a Category:
          <select name="category" required>
            <option value="">Select a category</option>
            {categories.map((category, idx) => (
              <option key={`category-${idx}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select a Subcategory:
          <select name="subCategory" required>
            <option value="" >
              Select a subcategory
            </option>
            {subcategories["Fantasy"].map((subcategory, idx) => (
              <option key={`subcategory-${idx}`} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </label>

        <label>
          Duration
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            required
            step={10}
            min={1}
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            step={5}
            min={1}
          />
        </label>

        <label htmlFor="featured">
          <input type="checkbox" id="featured" name="featured" role="switch" />
          Featured
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
