export const workFlow = (dispatch, state) => {
  const client = state().clarifai.client;
  const picture = state().pictures.pictures[0].split(",")[1];
  return client.workflow.predict("personalWebSite", {
    base64: picture
  });
  //
  // Fake data so I don't call Clarifai
  // let data = {
  //   results: [
  //     {
  //       outputs: [
  //         {
  //           data: {
  //             regions: [
  //               {
  //                 data: {
  //                   face: {
  //                     age_appearance: {
  //                       concepts: [{ name: 36 }, { name: 37 }, { name: 39 }]
  //                     },
  //                     gender_appearance: { concepts: [{ name: "masculine" }] },
  //                     multicultural_appearance: {
  //                       concepts: [
  //                         { name: "white" },
  //                         { name: "middle eastern or north african" },
  //                         { name: "asian" }
  //                       ]
  //                     }
  //                   }
  //                 }
  //               }
  //             ]
  //           }
  //         },
  //         {
  //           data: {
  //             regions: [
  //               {
  //                 data: {
  //                   face: {
  //                     identity: {
  //                       concepts: [
  //                         { name: "robert lasardo" },
  //                         { name: "michael mando" },
  //                         { name: "jonathan pryce" }
  //                       ]
  //                     }
  //                   }
  //                 }
  //               }
  //             ]
  //           }
  //         },
  //         {
  //           data: {
  //             concepts: [
  //               { name: "portrait" },
  //               { name: "man" },
  //               { name: "people" },
  //               { name: "adult" },
  //               { name: "indoors" },
  //               { name: "one" },
  //               { name: "light" },
  //               { name: "room" },
  //               { name: "wear" },
  //               { name: "business" },
  //               { name: "facial expression" },
  //               { name: "side view" },
  //               { name: "offense" },
  //               { name: "window" },
  //               { name: "festival" },
  //               { name: "music" },
  //               { name: "confidence" },
  //               { name: "facial hair" },
  //               { name: "landscape" },
  //               { name: "battle" }
  //             ]
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // };
  //
  // return new Promise((resolve, reject) => {
  //   resolve(data);
  // });
};
export const parseInfo = response => {
  // demographics data
  let demographics = response.results[0].outputs[0].data.regions[0].data.face;
  // celebrity data
  let celebrity =
    response.results[0].outputs[1].data.regions[0].data.face.identity.concepts;
  // general data
  let general = response.results[0].outputs[2].data.concepts;
  let age = demographics.age_appearance.concepts
    .slice(0, 3)
    .map(el => el.name)
    .sort();

  let data = {
    demographics: {
      age: [age[0], age[2]],
      gender: demographics.gender_appearance.concepts[0].name,
      ethnicity: demographics.multicultural_appearance.concepts
        .slice(0, 3)
        .map(el => el.name)
    },
    celebrity: celebrity.slice(0, 3).map(el => el.name),
    general: general.map(el => el.name)
  };
  return data;
};
