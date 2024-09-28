import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Crafting the Perfect Burger",
    author: "Chef Alex",
    date: "2024-09-15",
    image: "blog1.png",
    excerpt:
      "Discover the secrets behind our famous burgers, made with fresh ingredients and cooked to perfection every time.",
    content: `At our restaurant, we take pride in crafting the perfect burger. From sourcing the finest beef to using locally sourced toppings, every step is designed to deliver the best possible burger experience. Learn how we balance flavors, textures, and freshness to create the ultimate bite.`,
    tags: ["burger", "recipe", "chef", "dining"],
    category: "Recipes",
  },
  {
    id: 2,
    title: "How to Pair Wine with Your Meal: Expert Tips",
    author: "Sommelier Olivia",
    date: "2024-09-10",
    image: "blog2.png",
    excerpt:
      "Choosing the right wine to complement your meal can elevate your dining experience. Here are our expert tips for perfect pairings.",
    content: `Whether you're enjoying a juicy steak or a light seafood dish, pairing the right wine can enhance the flavors of your meal. Our sommelier shares tips on how to choose the perfect wine, whether you're a red or white wine lover.`,
    tags: ["wine", "pairing", "dining", "tips"],
    category: "Wine & Drinks",
  },
  {
    id: 3,
    title:
      "Celebrate Your Special Day with Us: Private Events at Our Restaurant",
    author: "Event Coordinator Emily",
    date: "2024-09-05",
    image: "blog3.png",
    excerpt:
      "Planning a special event? Host your next celebration with us for a memorable dining experience that everyone will enjoy.",
    content: `Whether you're planning a birthday party, anniversary celebration, or corporate event, our restaurant offers a range of private dining options to suit any occasion. Learn more about our event packages and how we can make your special day unforgettable.`,
    tags: ["private events", "celebration", "dining"],
    category: "Events",
  },
  {
    id: 4,
    title: "5 Delicious Vegan Dishes You Need to Try",
    author: "Chef Maria",
    date: "2024-08-30",
    image: "blog4.png",
    excerpt:
      "Our menu isn't just for meat lovers! Here are five vegan dishes that will leave you craving more.",
    content: `We believe in offering delicious options for everyone, which is why we've created a variety of mouth-watering vegan dishes. From our quinoa-stuffed bell peppers to our flavorful roasted vegetable platter, these dishes are packed with flavor and nutrition.`,
    tags: ["vegan", "recipes", "dining", "healthy"],
    category: "Health & Wellness",
  },
  {
    id: 5,
    title: "A Behind-the-Scenes Look at Our Farm-to-Table Approach",
    author: "Chef James",
    date: "2024-08-20",
    image: "blog5.png",
    excerpt:
      "Learn how we bring fresh, locally sourced ingredients from the farm to your table, and why it matters.",
    content: `Our commitment to quality starts with the ingredients we use. By working closely with local farmers, we're able to bring the freshest produce, meats, and dairy products to our restaurant. This farm-to-table approach not only supports local businesses but also ensures that our dishes are packed with flavor and nutrition.`,
    tags: ["farm-to-table", "local", "fresh ingredients", "dining"],
    category: "Sustainability",
  },
  {
    id: 6,
    title: "The Benefits of Seasonal Menus: Why We Change with the Seasons",
    author: "Chef Emma",
    date: "2024-08-15",
    image: "blog6.png",
    excerpt:
      "Our seasonal menu is designed to showcase the freshest ingredients at their peak. Here's why we change our menu every season.",
    content: `We believe in offering our customers the best of what's in season. Our menu changes every few months to reflect the freshest ingredients available, allowing us to create dishes that are full of flavor and perfectly timed for the season.`,
    tags: ["seasonal", "fresh ingredients", "menu", "dining"],
    category: "Food & Dining",
  },
];

function BlogCard({ post }) {
  return (
    <div className="">
      <div className="w-fit py-2 px-4 border-2 border-myColor bg-white ms-5 -mb-5 relative">
        {post.date}
      </div>
      <img src={post.image} alt="" className="w-full" />
      <div className="text-3xl lg:text-4xl py-5">{post.title}</div>
      <div className="w-fit py-2 px-3 bg-myColor flex gap-2 text-white">
        <div className="">{post.author}</div>
        <div className="">|</div>
        <div className="">in {post.category}</div>
        <div className="">|</div>
        <div className="">11 comments</div>
      </div>
      <div className="py-5 text-black/60 leading-[1.8]">{post.content}</div>
    </div>
  );
}

function BlogGrid() {
  return (
    <div className="py-20 bg-white text-black">
      <div className="xl:max-w-7xl lg:max-w-6xl mx-auto my-10 lg:p-8 grid gap-10 lg:grid-cols-2">
        <div className="space-y-12">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
        <div className="space-y-12 pt-20">
          {blogPosts.slice(3, 6).map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      </div>
      <button className="py-3 px-20 bg-myColor hover:bg-white hover:text-myColor border-2 border-myColor text-white w-fit mx-auto text-lg block duration-200">
        Load More
      </button>
    </div>
  );
}

export default BlogGrid;
