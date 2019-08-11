import { Injectable } from "@angular/core";
import { MealDealProduct } from "./models/meal-deal-product";
import { ProductCategory } from "./models/product-category";
import {Product} from './models/product';

@Injectable({
  providedIn: "root"
})
export class ProductsCoreService {
  public mealDealProducts: MealDealProduct[] = [
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    },
    {
      name: "the great alone",
      ingredients:
        "ANY 8 INCH PIZZA, FRIES, GARLIC BREAD, HAGEN DAZ & CAN OF DRINK",
      price: 18.5,
      currency: "GBP"
    }
  ];

  public productsCategory: ProductCategory[] = [
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "pizzas",
      isActive: false,
      description:
        "Some description here description here description here description here",
      subCategory: [
        {
          title: "margherita",
          description: "Mozzarella, cheese and tomato",
          product: [
            { orderNo: 41, name: '8" margherita', price: 5.6, currency: "GBP" },
            {
              orderNo: 42,
              name: '10" margherita',
              price: 4.8,
              currency: "GBP"
            },
            { orderNo: 43, name: '12" margherita', price: 4.8, currency: "GBP" }
          ]
        },
        {
          title: "Mega Meat Feast",
          description:
            "Roast Chicken, Mince Meat, Pepperoni, Turkey and Spicy Beef",
          product: [
            {
              orderNo: 41,
              name: '8" Mega Meat Feast',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Mega Meat Feast',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Mega Meat Feast ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        },
        {
          title: "Pepperoni Supreme",
          description: "Double Cheese & Double Pepperoni",
          product: [
            {
              orderNo: 41,
              name: '8" Pepperoni Supreme',
              price: 5.6,
              currency: "GBP"
            },
            {
              orderNo: 42,
              name: '10" Pepperoni Supreme',
              price: 4.8,
              currency: "GBP"
            },
            {
              orderNo: 43,
              name: '12" Pepperoni Supreme ',
              price: 4.8,
              currency: "GBP"
            }
          ]
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    },
    {
      name: "Curry Dishes",
      isActive: false,
      description:
        "Some description here description here description here description here",
      products: [
        { orderNo: 41, name: "King Prawn Curry", price: 5.6, currency: "GBP" },
        { orderNo: 42, name: "Shrimp Curry", price: 5.6, currency: "GBP" },
        { orderNo: 44, name: "Chiken Curry", price: 5.6, currency: "GBP" },
        { orderNo: 45, name: "Beef Curry", price: 5.6, currency: "GBP" },
        { orderNo: 46, name: "pork Curry", price: 5.6, currency: "GBP" },
        {
          orderNo: 47,
          name: "Shrimps With Baby Corn and Straw Mushrooms",
          price: 5.6,
          currency: "GBP"
        }
      ]
    }
  ];

  constructor() {}
}
