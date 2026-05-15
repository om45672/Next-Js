import React from "react";
import { Roboto, Poppins, Jockey_One } from "next/font/google";

// const roboto = Roboto({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
// const jockey = Jockey_One({
//   weight: ["400"],
//   subsets: ["latin"],
// });
const FontExample = () => {
  return (
    <div>
      <h1 className={`text-4xl`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, unde
        magni voluptas minus est cupiditate inventore, debitis consequatur
        similique et possimus autem tenetur, harum illo earum alias repellat
        rem. Sequi voluptates autem aut molestias inventore eos porro quisquam,
        magni maxime laboriosam commodi consectetur officia temporibus nam
        voluptatum dolor debitis enim exercitationem eum obcaecati! Nisi
        nesciunt quidem necessitatibus iusto illo consequatur vitae suscipit
        libero, sequi officiis doloremque, officia laboriosam. Mollitia vel,
        laudantium modi recusandae voluptatum odit dolor officiis impedit
        dolores deserunt!
      </p>
    </div>
  );
};

export default FontExample;
