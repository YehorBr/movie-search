import { useLoaderData } from "react-router-dom";
import {
  ReviewsList,
  ReviewItem,
  ReviewHeader,
  Author,
  ReviewDate,
  Content,
} from "./Reviews.styled";

export const Reviews = () => {
  const reviewsData = useLoaderData();
  const revs = reviewsData.results;

  if (!revs || revs.length === 0) {
  return <p>No reviews yet.</p>;
}

  return (
    <>
      <h2>Reviews</h2>
      <ReviewsList>
        {revs.map((rev) => {
          const created = rev.created_at.slice(0, 10);
          const date = new Date(created);
          const options = { day: "numeric", month: "long", year: "numeric" };
          const normDate = date.toLocaleDateString("en-EN", options);

          return (
            <ReviewItem key={rev.id}>
              <ReviewHeader>
                <Author>{rev.author_details.username}</Author>
                <ReviewDate>{normDate}</ReviewDate>
              </ReviewHeader>
              <Content>{rev.content}</Content>
            </ReviewItem>
          );
        })}
      </ReviewsList>
    </>
  );
};