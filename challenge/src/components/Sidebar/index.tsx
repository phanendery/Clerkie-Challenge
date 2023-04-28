import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="sidebar-header">
        <Image
          src="/clerkieIcon.svg"
          alt="My SVG File"
          width={24}
          height={24}
          style={{ marginRight: "10px" }}
        />
        Clerkie Challenge
      </div>
      <CustomLink href="/">
        <div className="sidebar-option">
          <Image
            src="/homeIcon.svg"
            alt="My SVG File"
            width={24}
            height={24}
            style={{ marginLeft: "10px" }}
          />
          <p className="option-title">Home</p>
        </div>
      </CustomLink>
      <CustomLink href="/friends">
        <div className="sidebar-option">
          <Image
            src="/friendsIcon.svg"
            alt="My SVG File"
            width={24}
            height={24}
            style={{ marginLeft: "10px" }}
          />
          <p className="option-title">Friends</p>
        </div>
      </CustomLink>
    </div>
  );
}
