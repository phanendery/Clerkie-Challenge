import { useState, useRef, useCallback } from "react";

import HomeLayout from "@/layouts/nav";
import Header from "../components/Header";
import styled from "styled-components";
import Image from "next/image";
import FriendCard from "@/components/FriendCard";

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    middleName: "",
    email: "john.doe@example.com",
    phoneNumber: "(717) 576-8110",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    middleName: "",
    email: "jane.doe@example.com",
    phoneNumber: "(331) 596-8863",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    middleName: "",
    email: "bob.smith@example.com",
    phoneNumber: "(774) 754-8142",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    middleName: "Marie",
    email: "alice.johnson@example.com",
    phoneNumber: "(867) 425-7402",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Michael",
    lastName: "Williams",
    middleName: "",
    email: "michael.williams@example.com",
    phoneNumber: "(270) 700-4798",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Laura",
    lastName: "Davis",
    middleName: "",
    email: "laura.davis@example.com",
    phoneNumber: "(586) 775-0483",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "David",
    lastName: "Wilson",
    middleName: "",
    email: "david.wilson@example.com",
    phoneNumber: "(510) 368-3559",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Emily",
    lastName: "Miller",
    middleName: "Grace",
    email: "emily.miller@example.com",
    phoneNumber: "(417) 564-2419",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Daniel",
    lastName: "Taylor",
    middleName: "",
    email: "daniel.taylor@example.com",
    phoneNumber: "(985) 304-3228",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Sarah",
    lastName: "Anderson",
    middleName: "",
    email: "sarah.anderson@example.com",
    phoneNumber: "(402) 006-4245",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Joshua",
    lastName: "Thomas",
    middleName: "David",
    email: "joshua.thomas@example.com",
    phoneNumber: "(970) 211-4540",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Olivia",
    lastName: "Jackson",
    middleName: "",
    email: "olivia.jackson@example.com",
    phoneNumber: "(704) 775-8234",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Ryan",
    lastName: "White",
    middleName: "",
    email: "ryan.white@example.com",
    phoneNumber: "(682) 962-9713",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Ava",
    lastName: "Harris",
    middleName: "",
    email: "ava.harris@example.com",
    phoneNumber: "(641) 301-6150",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Ethan",
    lastName: "Martin",
    middleName: "Alexander",
    email: "ethan.martin@example.com",
    phoneNumber: "(431) 892-4475",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Sophia",
    lastName: "Thompson",
    middleName: "",
    email: "sophia.thompson@example.com",
    phoneNumber: "(220) 019-5261",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Matthew",
    lastName: "Garcia",
    middleName: "",
    email: "matthew.garcia@example.com",
    phoneNumber: "(432) 883-5470",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Ethan",
    lastName: "Martin",
    middleName: "Alexander",
    email: "ethan.martin@example.com",
    phoneNumber: "(431) 892-4475",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "John",
    lastName: "Doe",
    middleName: "",
    email: "john.doe@example.com",
    phoneNumber: "(717) 576-8110",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    middleName: "",
    email: "jane.doe@example.com",
    phoneNumber: "(331) 596-8863",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    middleName: "",
    email: "bob.smith@example.com",
    phoneNumber: "(774) 754-8142",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    middleName: "Marie",
    email: "alice.johnson@example.com",
    phoneNumber: "(867) 425-7402",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Michael",
    lastName: "Williams",
    middleName: "",
    email: "michael.williams@example.com",
    phoneNumber: "(270) 700-4798",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Laura",
    lastName: "Davis",
    middleName: "",
    email: "laura.davis@example.com",
    phoneNumber: "(586) 775-0483",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "David",
    lastName: "Wilson",
    middleName: "",
    email: "david.wilson@example.com",
    phoneNumber: "(510) 368-3559",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Emily",
    lastName: "Miller",
    middleName: "Grace",
    email: "emily.miller@example.com",
    phoneNumber: "(417) 564-2419",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Daniel",
    lastName: "Taylor",
    middleName: "",
    email: "daniel.taylor@example.com",
    phoneNumber: "(985) 304-3228",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Sarah",
    lastName: "Anderson",
    middleName: "",
    email: "sarah.anderson@example.com",
    phoneNumber: "(402) 006-4245",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Joshua",
    lastName: "Thomas",
    middleName: "David",
    email: "joshua.thomas@example.com",
    phoneNumber: "(970) 211-4540",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Olivia",
    lastName: "Jackson",
    middleName: "",
    email: "olivia.jackson@example.com",
    phoneNumber: "(704) 775-8234",
    closeFriends: false,
    superCloseFriends: true,
  },
  {
    firstName: "Ryan",
    lastName: "White",
    middleName: "",
    email: "ryan.white@example.com",
    phoneNumber: "(682) 962-9713",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Ava",
    lastName: "Harris",
    middleName: "",
    email: "ava.harris@example.com",
    phoneNumber: "(641) 301-6150",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Ethan",
    lastName: "Martin",
    middleName: "Alexander",
    email: "ethan.martin@example.com",
    phoneNumber: "(431) 892-4475",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Sophia",
    lastName: "Thompson",
    middleName: "",
    email: "sophia.thompson@example.com",
    phoneNumber: "(220) 019-5261",
    closeFriends: false,
    superCloseFriends: false,
  },
  {
    firstName: "Matthew",
    lastName: "Garcia",
    middleName: "",
    email: "matthew.garcia@example.com",
    phoneNumber: "(432) 883-5470",
    closeFriends: true,
    superCloseFriends: false,
  },
  {
    firstName: "Ethan",
    lastName: "Martin",
    middleName: "Alexander",
    email: "ethan.martin@example.com",
    phoneNumber: "(431) 892-4475",
    closeFriends: true,
    superCloseFriends: false,
  },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  justify-content: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterContainer = styled.div`
  height: 286px;
  width: 320px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  font-family: "Inter";
  position: absolute;
  top: 20px;
  left: 70px;
  background: white;
`;

const FilterAndClear = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-left: 50px;
`;

const ClearFilter = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #d7d7d7;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  height: 45px;
  width: 300px;
  background: #424242;
  color: white;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  margin-left: 11px;
  cursor: pointer;
`;

const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  align-items: center;
  padding: 15px;
  width: 100%;
`;

const FilterText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #686868;
  margin: 25px 0px;
`;

const FilterCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  justify-content: flex-start;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 285px;
`;

const FilterPosition = styled.div`
  display: flex;
  position: relative;
`;

const BlueClearAll = styled.div`
  font-size: 14px;
  color: #2f80ed;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    font-weight: 600;
    transition: 0.3s;
  }
`;

export default function Friends() {
  const slicedFriends = data.slice(0, 7);

  const [friends, setFriends] = useState(slicedFriends);
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filter, setFilter] = useState({
    closeFriends: false,
    superCloseFriends: false,
  });

  let endIndex = 1;

  const observer = useRef<IntersectionObserver>();
  const lastFriendElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        endIndex += 5;
        setFriends(data.slice(0, endIndex));
        setFilteredFriends(data.slice(0, endIndex));
        setFilter({
          closeFriends: false,
          superCloseFriends: false,
        });
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const handleFilter = () => {
    const filtered = friends.filter((friend) => {
      if (filter.closeFriends && filter.superCloseFriends) {
        return friend.closeFriends || friend.superCloseFriends;
      } else if (filter.closeFriends) {
        return friend.closeFriends;
      } else if (filter.superCloseFriends) {
        return friend.superCloseFriends;
      } else {
        return true;
      }
    });
    setFilteredFriends(filtered);
  };

  const filterCount = Object.values(filter).reduce(
    (acc, cur) => (cur ? acc + 1 : acc),
    0
  );

  let filterImagePath = "/filterIcon.svg";

  if (filterCount === 1) {
    filterImagePath = "/oneFilter.svg";
  } else if (filterCount === 2) {
    filterImagePath = "/twoFilter.svg";
  }

  return (
    <HomeLayout>
      <Header text="Friends" />
      <Container>
        <FilterAndClear>
          <Image
            src={filterImagePath}
            alt="My SVG File"
            width={59}
            height={27}
            onClick={() => setFilterModalOpen(true)}
          />
          <Image
            src="/splitter.svg"
            alt="My SVG File"
            width={28}
            height={28}
            onClick={() => setFilterModalOpen(true)}
          />
          <ClearFilter
            onClick={() => {
              setFilteredFriends(friends);
              setFilter({ closeFriends: false, superCloseFriends: false });
            }}
          >
            Clear All
          </ClearFilter>
        </FilterAndClear>
        <FilterPosition>
          {filterModalOpen && (
            <FilterContainer>
              <FilterHeader>
                <BlueClearAll
                  onClick={() => {
                    setFilter({
                      closeFriends: false,
                      superCloseFriends: false,
                    });
                  }}
                >
                  Clear All
                </BlueClearAll>
                <div>Filter</div>
                <Image
                  src="/closeIcon.svg"
                  alt="My SVG File"
                  width={10}
                  height={10}
                  onClick={() => setFilterModalOpen(false)}
                  style={{ cursor: "pointer", marginRight: "25px" }}
                />
              </FilterHeader>
              <FilterCheckContainer>
                <FilterText>Friend Status</FilterText>
                <InputContainer>
                  <StyledLabel>Close Friends</StyledLabel>
                  <input
                    type="checkbox"
                    checked={filter.closeFriends}
                    onChange={(e) =>
                      setFilter({ ...filter, closeFriends: e.target.checked })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <StyledLabel>Super Close Friends</StyledLabel>
                  <input
                    type="checkbox"
                    checked={filter.superCloseFriends}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        superCloseFriends: e.target.checked,
                      })
                    }
                  />
                </InputContainer>
              </FilterCheckContainer>

              <ApplyButton
                onClick={() => {
                  handleFilter();
                  setFilterModalOpen(false);
                }}
              >
                Apply
              </ApplyButton>
            </FilterContainer>
          )}
        </FilterPosition>
        <CardsContainer id="friends-container">
          {filteredFriends.map((friendInfo, i) => {
            return <FriendCard key={i} friendInfo={friendInfo} />;
          })}
        </CardsContainer>
        <div
          id="friends-bottom"
          style={{ height: "100px", width: "100%", background: "transparent" }}
          ref={lastFriendElementRef}
        ></div>
      </Container>
    </HomeLayout>
  );
}
