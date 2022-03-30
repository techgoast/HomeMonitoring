import React from "react";
import {Flex, Sth2} from "../template/style";
import {
  Staside,
  Mediahandler,
  Owner,
  Icon,
  Image,
  Namespan,
  Searchcontainer,
  Stinput,
  Stp,
  Numbers,
  Quick,
  Accessflex,
  Access,
  Iconcontainer,
  Accessicon,
  Sth3,
  Staccess,
  Accessp
} from "./style";
import "../all-min/all.min.css";
import Alicia from "../../images/aside/Avatar.webp";


const Aside = () => {
    return (
      <Staside>
        <Mediahandler>
          <Flex>
            <Icon className="fa-solid fa-bell"></Icon>
            <Owner>
              <Namespan>Alicia</Namespan>
              <Image src={Alicia} alt="Alicia" />
            </Owner>
          </Flex>
          <Searchcontainer>
            <Icon className="fa-solid fa-magnifying-glass"></Icon>
            <Stinput type="search" placeholder="Search tasks to do or help" />
          </Searchcontainer>
        </Mediahandler>
        <Mediahandler>
          <Flex>
            <div>
              <Icon className="fa-solid fa-temperature-half"></Icon>
              <Stp>TEMPERATURE</Stp>
              <Numbers>26°</Numbers>
            </div>
            <div>
              <Icon className="fa-solid fa-droplet"></Icon>
              <Stp>TEMPERATURE</Stp>
              <Numbers>26°</Numbers>
            </div>
          </Flex>
        </Mediahandler>
        <Quick>
          <Sth2>QUICK access</Sth2>
          <Accessflex>
            <Access>
              <Iconcontainer>
                <Accessicon className="fa-solid fa-unlock-keyhole"></Accessicon>
              </Iconcontainer>
                <Staccess>
                  <Sth3>SECURITY</Sth3>
                  <Accessp>Partial Lock</Accessp>
                </Staccess>
            </Access>
            <Access>
              <Iconcontainer>
                <Accessicon className="fa-solid fa-lightbulb"></Accessicon>
              </Iconcontainer>
                <Staccess>
                  <Sth3>LIGHTS</Sth3>
                  <Flex>
                    <div>
                      <Numbers>3</Numbers>
                      <Accessp>ON</Accessp>
                    </div>
                    <div>
                      <Numbers>8</Numbers>
                      <Accessp>OFF</Accessp>
                    </div>
                  </Flex>
                </Staccess>
            </Access>
            <Access>
              <Iconcontainer>
                <Accessicon className="fa-solid fa-wifi"></Accessicon>
              </Iconcontainer>
                <Staccess>
                  <Sth3>WiFi</Sth3>
                  <Numbers>4</Numbers>
                  <Accessp>Devices</Accessp>
                </Staccess>
            </Access>
            <Access>
              <Iconcontainer>
                <Accessicon className="fa-solid fa-add"></Accessicon>
              </Iconcontainer>
                <Staccess>
                  <Sth3>Add</Sth3>
                </Staccess>
            </Access>
          </Accessflex>
        </Quick>
      </Staside>
    );
}

export default Aside;
