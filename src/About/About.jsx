import CommentClient from "./CommentClient";
import ContainerAbout from "./ContainerAbout";
import FounderAbout from "./FounderAbout";
import ImageAbout from "./ImageAbout";

const About = () => {
  return (
    <div>
      <ImageAbout></ImageAbout>
      <ContainerAbout></ContainerAbout>
      <FounderAbout></FounderAbout>
      <CommentClient></CommentClient>
    </div>
  );
};

export default About;
