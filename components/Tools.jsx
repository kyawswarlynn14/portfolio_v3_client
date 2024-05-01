import React from "react";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoAws,
  BiLogoDigitalocean,
} from "react-icons/bi";
import {
  SiMysql,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import BallCanvas from "./canvas/Ball";
import { TECHNOLOGIES } from "@/constants";
import GithubInfo from "./GithubInfo";

function Tools() {
  return (
    <div id="tools" className="pageMainDiv">
      <h1 className="subTitle">Technologies I Use</h1>

      <div className="hidden md:flex flex-row flex-wrap justify-center gap-10 mt-6">
        {TECHNOLOGIES?.length &&
          TECHNOLOGIES.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
      </div>

      <div className="mt-8 md:hidden flex justify-between flex-wrap gap-8">
        <div className="tool">
          <h5 className="toolTitle">Frontend</h5>

          <div className="toolItem">
            <FaReact size={25} /> React
          </div>

          <div className="toolItem">
            <FaAngular size={25} />
            Angular
          </div>
        </div>

        <div className="tool">
          <h5 className="toolTitle">Backend</h5>

          <div className="toolItem">
            <FaNodeJs size={25} /> Node Js
          </div>

          <div className="toolItem">
            <SiNextdotjs size={25} /> Next Js
          </div>
        </div>

        <div className="tool">
          <h5 className="toolTitle">Database</h5>

          <div className="toolItem">
            <BiLogoPostgresql size={25} />
            PostgreSQL
          </div>

          <div className="toolItem">
            <SiMysql size={25} />
            MySQL
          </div>

          <div className="toolItem">
            <BiLogoMongodb size={25} />
            MongoDB
          </div>
        </div>

        <div className="tool">
          <h5 className="toolTitle">Mobile</h5>

          <div className="toolItem">
            <RiFlutterFill size={25} /> Flutter
          </div>
        </div>

        <div className="tool">
          <h5 className="toolTitle">Clouds and DevOps</h5>

          <div className="toolItem">
            <BiLogoAws size={25} />
            Amazon Web Services
          </div>

          <div className="toolItem">
            <BiLogoDigitalocean size={25} />
            Digital Ocean
          </div>
        </div>

        <div className="tool">
          <h5 className="toolTitle">Testing</h5>

          <div className="toolItem">
            <SiPostman size={25} />
            Postman
          </div>
        </div>
      </div>

      <GithubInfo />
    </div>
  );
}

export default Tools;
