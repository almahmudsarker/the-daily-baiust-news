import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { Container } from 'react-bootstrap';

const About = () => {
    useTitle("About");
    return (
      <Container>
        <h1 className="text-dtcn fs-1 fw-bolder">About Us</h1>
        <hr />
        <h5 className="text-dtcn">Core Values</h5>
        <small>
          Integrity: It is commitment to uphold the highest standard of moral,
          ethical and professional conduct. Openness: One should think clearly,
          study freely with open mind willing to learn and examine the complex
          problems with reasoning. Intellectual Curiosity: One must strive to
          broaden his/her knowledge, stretch intellectual horizon, and push
          beyond the comfort zones. As one gains knowledge, it will give him/her
          the power, authority and confidence. Commitment to Excellence: The
          commitment to produce highly competent and global standard manpower on
          science and technology who will be proficient in communication skills,
          critical thinking, and analytical abilities. The aim is to search for
          truth and delivery of socially relevant, scientific and technology
          contributions. This is a place where hard work will be rewarded and
          talents will be nurtured. Self Discipline: One must impose
          self-discipline to abide by the rules, and regulations of the
          University and beyond. Sense of Responsibility: All must inculcate the
          sense of responsibility, and discharge the assign duties judiciously.
          Diversity: In due course of time, the University aims to have
          students, faculty, and researchers from various discipline,
          nationalities, and cultural background. Respect for others: As members
          are from devise culture, race and religion, all must show respect for
          others.
        </small>
        <h5 className="text-dtcn mt-3">Objectives</h5>
        <small>
          To offer need-based programs and important disciplines of Science,
          Technology, Social Science and Business for both undergraduate and
          graduate students. To strive for excellence by providing quality
          teaching through wide varieties of instructional approaches. To
          produce highly competent and global standard manpower in Science and
          Technology; who will be proficient in communication skill, critical
          thinking and analytical abilities. To generate adequate resources to
          support the university’s instructions, research and extension
          pursuits. To provide timely, accessible and friendly support system
          that promotes partnership and sense of shared responsibilities amongst
          students, faculties, alumni and other stakeholders. To strive for the
          gradual expansion of faculties, departments and programs in accordance
          with the need and in abidance with the Private University Act 2010. To
          develop joint collaboration with similar universities, institutes and
          organizations, both at home and abroad and make agreements and
          Memorandum of Understandings (MoU) to this effect. To sensitize and
          infuse amongst the students and the graduates the core values of
          BAIUST i.e., Integrity, Openness, Intellectual curiosity, Commitment
          to excellence, Self-discipline, Sense of responsibility, Diver sity
          and Respect for others. To carry out other necessary works of the
          university to meet the need of the time.
        </small>
        <h5 className="text-dtcn mt-3">Mission</h5>
        <small>
          The mission of BAIUST is to provide state of the art education and
          research in Science, Engineering and other relevant programs to
          develop human resources for the socio-economic well-being of the
          society.
        </small>
        <h5 className="text-dtcn mt-3">Vision</h5>
        <small>
          The university aspires to transform into a center of excellence in
          Science, Engineering and Technology by providing innovative,
          multi-disciplinary programs to the young generation of the country and
          beyond, It endeavors to be hub of knowledge and be recognizes as a
          leading university of the country.
        </small>
      </Container>
    );
};

export default About;