import Footer from "../../Components/footer";
import CommentClientDetail from "../comment-client-detail";

const CommentClient = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[40px] font-bold pb-[100px] pt-[50px]">
          Testimonials
        </h1>
      </div>
      <CommentClientDetail></CommentClientDetail>
      <CommentClientDetail></CommentClientDetail>
      <CommentClientDetail></CommentClientDetail>
    
    </div>
  );
};

export default CommentClient;
