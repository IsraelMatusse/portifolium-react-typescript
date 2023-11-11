
'use client';

import {  Timeline } from 'flowbite-react';

const Experience=()=> {
  return (
    <div className='ml-20 mt-10'>
        <Timeline >
          <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>May 2023</Timeline.Time>
          <Timeline.Title className="text-1xl font-bold mb-4 text-blue-500 ">NETLINE SERV</Timeline.Title>
          <Timeline.Body className=" text-black-500 " >
          I currently work as a programmer analyst. implementing everything from business process modeling to solution development. <br />
          I have experience in developing web services using architectures such as REST and GRAPHQL. <br />
          and work in a microservices environment
        </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>September 2022</Timeline.Time>
          <Timeline.Title className="text-1xl font-bold mb-4 text-blue-500 ">FASOREL SA</Timeline.Title>
          <Timeline.Body className=" text-black-500 ">
          I worked as an industrial mechanic. ensuring the operation of industrial equipment in the organization's functional units, such as: <br />
           food oil refinery, soap plant, bottle, filling plant, oil acid plant and others.
        </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time >September 2021</Timeline.Time>
          <Timeline.Title className="text-1xl font-bold mb-4 text-blue-500 ">MERECE INDUSTRIES</Timeline.Title>
          <Timeline.Body className=" text-black-500 ">
          I worked as a technical production operator at the biscuit plant. ensuring full functioning of the packaging line
        </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>January 2021</Timeline.Time>
          <Timeline.Title className="text-1ßxl font-bold mb-4 text-blue-500 ">STARTIMES</Timeline.Title>
          <Timeline.Body className=" text-black-500 ">
        I worked as a sales promoter for TMT kits and 3 months later I became team leader
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time >February 2019</Timeline.Time>
          <Timeline.Title className="text-1xl font-bold mb-4 text-blue-500 ">CFM-SUL</Timeline.Title>
          <Timeline.Body className=" text-black-500 ">
            I was an industrial mechanics intern in the general workshops of CFM Maputo. <br />
            in the departments of workshop conservation and general production.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
    
  );
};
export default Experience;
