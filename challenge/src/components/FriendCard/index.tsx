import styled from "styled-components";
import Image from "next/image";

interface FriendCardProps {
  friendInfo: {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    phoneNumber: string;
    closeFriends: boolean;
    superCloseFriends: boolean;
  };
}

const Card = styled.div`
  height: 114px;
  width: 1050px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  margin-top: 20px;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const NameAndLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 12px;
  align-items: center;
`;

const Email = styled.div`
  color: #ababab;
  font-size: 14px;
  margin-right: 5px;
`;

const PhoneNumber = styled.div`
  color: #ababab;
  font-size: 14px;
  margin-left: 5px;
`;

const SuperTag = styled.div`
  height: 21px;
  background: #dcffe6;
  padding: 3px 7px;
  border-radius: 21px;
  font-size: 12px;
  color: #19b444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-left: 10px;
`;

const ReallyTag = styled.div`
  height: 21px;
  background: #dfefff;
  padding: 3px 7px;
  border-radius: 21px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #3399ff;
  margin-left: 10px;
`;

export default function FriendCard({ friendInfo }: FriendCardProps) {
  const {
    firstName,
    lastName,
    middleName,
    email,
    phoneNumber,
    superCloseFriends,
    closeFriends,
  } = friendInfo;

  const renderTag = () => {
    if (superCloseFriends) {
      return <SuperTag>Super Close Friends</SuperTag>;
    } else if (closeFriends) {
      return <ReallyTag>Close Friends</ReallyTag>;
    } else {
      return null;
    }
  };

  return (
    <Card>
      <NameAndLabel>
        <>
          <Name>
            {firstName} {middleName} {lastName}
          </Name>
          {renderTag()}
        </>
      </NameAndLabel>
      <ContactInfo>
        <Email>{email}</Email>
        <Image src="/ellipse.svg" alt="My SVG File" width={4} height={4} />
        <PhoneNumber>{phoneNumber}</PhoneNumber>
      </ContactInfo>
    </Card>
  );
}
