


const badgeHelpers = {
  getUserImage: function (userName) {
    let images = [
      require("../../assets/herbert.jpg"),
      require("../../assets/jannis.jpg"),
      require("../../assets/john.jpg"),
      require("../../assets/user.jpg"),
    ]
    let image;
    switch(userName){
      case "Herbert Muller": image = images[0]; break;
      case "Jannis Schulz": image = images[1]; break;
      case "John Holmes": image = images[2]; break;
      case "Amanda Wattson": image = images[3]; break;
    }
    return image;
  },
  getBadgeImage: function (badgeName) {
    let images = [
      require("../../assets/illustrations/calm.png"),
      require("../../assets/illustrations/creative.png"),
      require("../../assets/illustrations/great.png"),
      require("../../assets/illustrations/handshake.png"),
      require("../../assets/illustrations/hero.png"),
      require("../../assets/illustrations/ideas.png"),
      require("../../assets/illustrations/marketing.png"),
      require("../../assets/illustrations/presentation.png"),
      require("../../assets/illustrations/problem.png"),
      require("../../assets/illustrations/process.png"),
      require("../../assets/illustrations/rocket.png"),
      require("../../assets/illustrations/teamMeeting.png"),
      require("../../assets/illustrations/teamwork.png"),
    ];
    let image;
    switch (badgeName) {
      case "calm":
        image = images[0];
        break;
      case "creative":
        image = images[1];
        break;
      case "great":
        image = images[2];
        break;
      case "handshake":
        image = images[3];
        break;
      case "hero":
        image = images[4];
        break;
      case "ideas":
        image = images[5];
        break;
      case "marketing":
        image = images[6];
        break;
      case "presentation":
        image = images[7];
        break;
      case "problem":
        image = images[8];
        break;
      case "process":
        image = images[9];
        break;
      case "rocket":
        image = images[10];
        break;
      case "teamMeeting":
        image = images[11];
        break;
      case "teamwork":
        image = images[12];
        break;
    }
    return image;
  },
  getBadgeText: function (badgeName) {
   
    let badgeText;
    switch (badgeName) {
      case "calm":
        badgeText = "Ruhepol!"
        break;
      case "creative":
        badgeText = "Kreativer Kopf!"
        break;
      case "great":
        badgeText = "Großartig!"
        break;
      case "handshake":
        badgeText = "Lass uns treffen!"
        break;
      case "hero":
        badgeText = "Held!"
        break;
      case "ideas":
        badgeText = "Super Ideen!"
        break;
      case "marketing":
        badgeText = "Geschafft!"
        break;
      case "presentation":
        badgeText = "Gute Präsentation!"
        break;
      case "problem":
        badgeText = "Problemlöser!"
        break;
      case "process":
        badgeText = "Guter Fortschritt!"
        break;
      case "rocket":
        badgeText = "Durchstarter!"
        break;
      case "teamMeeting":
        badgeText = "Lasst uns treffen!"
        break;
      case "teamwork":
        badgeText = "Gutes Teamwork!"
        break;
    }
    return badgeText;
  },
};

export default badgeHelpers;
