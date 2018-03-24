import { savePictureData } from "../actions/clarifaiActions";

export const workFlow = (dispatch, state) => {
  // const client = state().clarifai.client;
  // const picture = state().pictures.pictures[0].split(",")[1];
  // client.workflow
  //   .predict("personalWebSite", {
  //     base64: picture
  //   })
  //   .then(
  //     function(response) {
  //       // demographics data
  //       let demographics =
  //         response.results[0].outputs[0].data.regions[0].data.face;
  //       // celebrity data
  //       let celebrity =
  //         response.results[0].outputs[1].data.regions[0].data.face.identity
  //           .concepts;
  //       // general data
  //       let general = response.results[0].outputs[2].data.concepts;
  //       let age = demographics.age_appearance.concepts
  //         .slice(0, 3)
  //         .map(el => el.name)
  //         .sort();
  //
  //       let data = {
  //         demographics: {
  //           age: [age[0], age[2]],
  //           gender: demographics.gender_appearance.concepts[0].name,
  //           ethnicity: demographics.multicultural_appearance.concepts
  //             .slice(0, 3)
  //             .map(el => el.name)
  //         },
  //         celebrity: celebrity.slice(0, 3).map(el => el.name),
  //         general: general.map(el => el.name)
  //       };

  // Fake data so I don't call Clarifai
  let data = {
    demographics: {
      age: [36, 39],
      gender: "masculine",
      ethnicity: ["white", "middle eastern or north african", "asian"]
    },
    celebrity: ["robert lasardo", "michael mando", "jonathan pryce"],
    general: [
      "portrait",
      "man",
      "people",
      "adult",
      "indoors",
      "one",
      "light",
      "room",
      "wear",
      "business",
      "facial expression",
      "side view",
      "offense",
      "window",
      "festival",
      "music",
      "confidence",
      "facial hair",
      "landscape",
      "battle"
    ]
  };

  // debugger;
  dispatch(savePictureData(data));
  //   },
  //   function(err) {
  //     // there was an error
  //     console.log("err", err);
  //   }
  // );
};
