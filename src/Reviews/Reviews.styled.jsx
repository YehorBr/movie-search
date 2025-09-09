import styled from "styled-components";

export const ReviewsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
`;

export const ReviewItem = styled.li`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Author = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #ffbd57;
`;

export const ReviewDate = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #eaeaea;
  margin: 0;
  white-space: pre-line;    
`;