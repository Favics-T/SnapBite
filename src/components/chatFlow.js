
const chatFlow = {
  1: (input, userData) => {
    if (input.toLowerCase() === 'yes') {
      return {
        nextStep: 2,
        messages: ["Great! First, what's your name?"]
      };
    }
    if (input.toLowerCase() === 'not now') {
      return {
        messages: ["No problem! Whenever you're ready, we’re here to help you discover delicious pastries!"]
      };
    }
    return {
      messages: ["Please type 'Yes' or 'Not Now'"]
    };
  },

  2: (input, userData) => ({
    nextStep: 3,
    updatedUserData: { name: input },
    messages: [
      `Nice to meet you, ${input}! Which area of Port Harcourt are you located in?`
    ]
  }),

  3: (input, userData) => ({
    nextStep: 4,
    updatedUserData: { location: input },
    messages: [
      `Perfect! Now, what types of pastries do you enjoy most? (Type multiple separated by commas)\nOptions: Sweet, Savory, Bread, Cakes, Cookies, Others`
    ]
  }),

  4: (input, userData) => {
    const pastries = ['Sweet', 'Savory', 'Bread', 'Cakes', 'Cookies', 'Others'];
    const selected = input.split(',').map(p => p.trim()).filter(p => pastries.includes(p));
    if (selected.length === 0) {
      return {
        messages: ['Please select at least one valid pastry type from the list.']
      };
    }
    return {
      nextStep: 5,
      updatedUserData: { pastryPreference: selected },
      messages: [
        `Great! Do you have any dietary preferences or restrictions?\nOptions: None, Vegetarian, Gluten-Free, Sugar-Free, Nut-Free, Other`
      ]
    };
  },

  5: (input, userData) => {
    const dietary = ['None', 'Vegetarian', 'Gluten-Free', 'Sugar-Free', 'Nut-Free', 'Other'];
    const selected = dietary.find(d => d.toLowerCase() === input.toLowerCase());
    if (!selected) {
      return {
        messages: ['Please choose a valid dietary preference from the list.']
      };
    }
    return {
      nextStep: 6,
      updatedUserData: { dietaryPreference: selected },
      messages: [
        `Last question - what's your typical budget range for pastries?\nOptions: Budget (₦500-1500), Mid-range (₦1500-3000), Premium (₦3000+), No preference`
      ]
    };
  },

  6: (input, userData) => {
    const budgets = ['Budget (₦500-1500)', 'Mid-range (₦1500-3000)', 'Premium (₦3000+)', 'No preference'];
    const selected = budgets.find(b => b.toLowerCase().includes(input.toLowerCase()));
    if (!selected) {
      return {
        messages: ['Please choose a valid budget option from the list.']
      };
    }
    return {
      nextStep: 7,
      updatedUserData: { budget: selected },
      messages: [
        `Thanks, ${userData.name}! Your profile is all set up.\n\nHere's what we have:\n- Location: ${userData.location}\n- Pastry Preferences: ${userData.pastryPreference.join(', ')}\n- Dietary Preference: ${userData.dietaryPreference}\n- Budget: ${selected}\n\nWould you like to:\n[See Popular Pastries Nearby] [Browse by Category] [Search for Something Specific]`
      ]
    };
  },

  7: (input, userData) => {
    if (input.toLowerCase().includes("browse")) {
      return {
        nextStep: 8,
        messages: ["Here are the pastry categories available. Which would you like to explore?\n\n[Cakes] [Breads] [Pastries] [Cookies] [Pies] [Specialty Items]"]
      };
    }
    return { messages: ["Please type 'Browse by Category' to continue."] };
  },

  8: (input, userData) => {
    if (input.toLowerCase().includes("pastries")) {
      return {
        nextStep: 9,
        messages: [
          `Great choice! Here are some popular pastries near you in ${userData.location || 'your area'}:\n
1. *Butter Croissant* - ₦1,200\nFrom: Grace's Home Bakery (1.2km away)\n(32 ratings)\n[View Image]\n
2. *Chocolate Danish* - ₦1,500\nFrom: Daniel's Bakery (2.5km away)\n(18 ratings)\n[View Image]\n
3. *Cheese Puff Pastry* - ₦1,300\nFrom: Nneka's French Pastries (3.1km away)\n(45 ratings)\n[View Image]\n
Would you like to:\n[See More Options] [Filter Results] [View Details for an Item]`
        ]
      };
    }
    return {
      messages: ['Please select one of the categories like "Pastries", "Cakes", etc.']
    };
  },

  9: (input, userData) => {
    if (input.toLowerCase().includes("view details")) {
      return {
        nextStep: 10,
        messages: [
          `*Butter Croissant* from Grace's Home Bakery\n
Description: Flaky, buttery croissant made with imported French butter. Baked fresh daily.\nPrice: ₦1,200 per piece\nPreparation time: Made fresh daily, available from 7am\nDietary info: Contains gluten, dairy\nRating: 4.9/5 (32 ratings)\nBaker location: Woji, Port Harcourt (1.2km from you)\n\nWould you like to:\n[Order This Item] [See Reviews] [View Baker Profile] [Back to List]`
        ]
      };
    }
    return { messages: ["Please type 'View Details for an Item' to continue."] };
  },

  10: (input, userData) => {
    if (input.toLowerCase().includes("order")) {
      return {
        nextStep: 11,
        messages: ["Great choice! How many Butter Croissants would you like to order?\n[1] [2] [3] [4] [5] [Custom Amount]"]
      };
    }
    if (input.toLowerCase().includes("reviews")) {
      return { messages: ["✨ Reviews:\n⭐️⭐️⭐️⭐️⭐️ - “Best croissant in PH!”\n⭐️⭐️⭐️⭐️ - “So buttery and fresh!”"] };
    }
    if (input.toLowerCase().includes("profile")) {
      return { messages: [" Grace's Home Bakery\nLocation: Woji, Port Harcourt\nBaking since 2015\nRating: 4.9/5"] };
    }
    if (input.toLowerCase().includes("back")) {
      return { nextStep: 8, messages: ['Back to list! Select another item or choose a different category.'] };
    }
    return { messages: ['Please choose: [Order This Item] [See Reviews] [View Baker Profile] [Back to List]'] };
  },

  11: (input, userData) => {
    const quantity = parseInt(input);
    if (!isNaN(quantity) && quantity > 0) {
      return {
        nextStep: 12,
        updatedUserData: { quantity },
        messages: ["Would you like these delivered or would you prefer to pick them up?\n[Delivery] [Pickup]"]
      };
    }
    return { messages: ["Please enter a valid quantity (e.g. 1, 2, 3...)"] };
  },

  12: (input, userData) => {
    if (input.toLowerCase() === "delivery" || input.toLowerCase() === "pickup") {
      if (input.toLowerCase() === "delivery") {
        return {
          nextStep: 13,
          updatedUserData: { deliveryMethod: 'Delivery' },
          messages: ["When would you like your croissants delivered?\n[As Soon As Possible] [Schedule for Later]"]
        };
      } else {
        return {
          nextStep: 14,
          updatedUserData: { deliveryMethod: 'Pickup' },
          messages: ["Great! We'll prepare it for pickup. Your order is being summarized..."]
        };
      }
    }
    return { messages: ["Please choose either 'Delivery' or 'Pickup'"] };
  },

  13: (input, userData) => {
    if (input.toLowerCase().includes("as soon")) {
      const total = (userData.quantity || 1) * 1200;
      const deliveryFee = 500;
      return {
        nextStep: 14,
        messages: [
          `Here's your order summary:\n${userData.quantity || 1}x Butter Croissant from Grace's Home Bakery\nItem total: ₦${total}\nDelivery fee: ₦${deliveryFee}\nTotal: ₦${total + deliveryFee}\nDelivery to: ${userData.location || 'your address'}\nEstimated delivery: 45–60 minutes\n\nIs this correct?\n[Confirm Order] [Modify Order]`
        ]
      };
    }
    return { messages: ["You can say 'As Soon As Possible' or 'Schedule for Later'"] };
  },

  14: (input, userData) => {
    if (input.toLowerCase().includes("confirm")) {
      return {
        nextStep: 15,
        messages: ["Great! Please complete your payment through this secure link:\n[Payment Link]"]
      };
    }
    if (input.toLowerCase().includes("modify")) {
      return {
        nextStep: 11,
        messages: ['Okay! What would you like to change?']
      };
    }
    return { messages: ['Please choose [Confirm Order] or [Modify Order]'] };
  },

  15: () => ({
    nextStep: 16,
    messages: [
      "✅ Payment received! Your order has been confirmed and sent to Grace's Home Bakery.\nOrder #PH12345\nYou'll receive updates shortly.\n\nWould you like to:\n[Track Order] [Browse More Pastries] [Exit]"
    ]
  }),

  16: (input) => {
    if (input.toLowerCase().includes("track")) {
      return {
        nextStep: 17,
        messages: [
          "Here's the current status of your order #PH12345:\n- Order confirmed — 2:15 PM\n- Preparation started — 2:20 PM\n- Ready for delivery — In progress\n- Out for delivery — Pending\n- Delivered — Pending\n\nEstimated delivery: 3:10–3:25 PM\n\nNeed anything else?\n[Contact Baker] [Modify Order] [Support]"
        ]
      };
    }
    return { messages: ["You can track your order by typing 'Track Order'"] };
  },

  17: () => ({
    nextStep: 18,
    messages: [
      "🚚 Your order #PH12345 has been delivered!\nHow would you rate your experience with Grace's Home Bakery?\n[⭐️] [⭐️] [⭐️] [⭐️] [⭐️]"
    ]
  }),

  18: (input) => {
    if (input.includes("⭐")) {
      return {
        nextStep: 19,
        messages: ["Thanks for your feedback! Would you like to add any comments about your experience?\n[Add Comment] [Skip]"]
      };
    }
    return { messages: ["Please rate your experience by selecting stars."] };
  },

  19: () => ({
    nextStep: 20,
    messages: ["Thank you! Your feedback helps other pastry lovers. Would you like to:\n[Browse More Pastries] [Reorder This Item] [Set Up Regular Delivery]"]
  }),

  20: (input) => {
    if (input.toLowerCase().includes("regular")) {
      return {
        messages: ["Coming soon: Set up your recurring orders!"]
      };
    }
    return { messages: ["You can browse or reorder at any time!"] };
  }
};

export default chatFlow;
