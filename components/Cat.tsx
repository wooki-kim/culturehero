import styled from "styled-components";
import { IProfile } from "../types";
const FeedContent = styled.figure<{ photo: string | undefined }>`
  width: 100%;
  height: 100%;
  background: url("${(props) => props.photo}") no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  line-height: 120%;
  color: #fff;
  position: relative;

  figcaption {
    display: block;
    position: absolute;
    bottom: 70px;
    left: 10px;
    z-index: 10;
  }
  :after {
    content: "";
    position: absolute;
    background: linear-gradient(to top, black, 10%, transparent);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
const Bio = styled.p`
  font-size: 12px;
`;
const Etc = styled.ul`
  li {
    display: inline-block;
    color: rgba(240, 240, 240, 0.8);
    font-size: 10px;
    padding-right: 5px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 0px 6px;
    margin-right: 5px;
  }
`;
const Label = styled.span`
  display: inline-block;
  padding: 0px 5px;
  background: rgba(230, 230, 230, 0.5);
  font-size: 9px;
  box-sizing: border-box;
  border-radius: 3px;
  color: rgba(240, 240, 240, 0.9);
`;
const today = new Date();
const getBirthDay = (birthDay: Date) => {
  const birthDate = new Date(birthDay);
  return today.getFullYear() - birthDate.getFullYear() + 1;
};
interface IProps {
  item: IProfile | any;
  page: number | undefined;
}
const Cat = ({ item, page }: IProps) => {
  // console.log(item,page);
  return (
    <FeedContent photo={item.photo}>
      <Label>현재 페이지 : {page}</Label>
      <figcaption>
        <Label>{item.profileIdx} </Label>
        <p>
          {item.nickName}, {getBirthDay(item.birthday)}
          <i />
        </p>
        <Bio>{item.bio}</Bio>
        <Etc>
          <li>커피</li>
          <li>스포츠/운동</li>
          <li>술</li>
        </Etc>
      </figcaption>
    </FeedContent>
  );
};

export default Cat;
