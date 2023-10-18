import {FaComputer} from "react-icons/fa6";
import {FaPhotoVideo} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs";
import {GiSoccerBall} from "react-icons/gi";

const data = [
  {
    id: 1,
    icon: <FaComputer />,
    title: "Software Engineer Intern (June-September 2023)",
    subtitle: "Aunalytics (Kalamazoo)",
    duties: (
      <>
        <br></br>
        Duties
      </>
    ),
    desc: (
      <>
        <div>
          ●Participated in AGILE methodology throughout development cycle;
          aiding in sprint planning, daily stand-ups, sizing, and sprint
          retrospectives.
        </div>
        <div>
          ●Completed various tickets from backlog while utilizing project
          management tools like JIRA for development cycle.
        </div>
        <div>
          ●Gained experience with Kubernetes by utilizing MicroK8s to run local
          environment and update container images.
        </div>
        <div>
          ●Languages used: Typescript, SQL, C#, GOLANG, HTML, JavaScript, CSS.
        </div>
        <div>
          ●Gained experience with Docker, leveraging Docker to run tests by
          creating a reproducible environment using a docker-compose file to
          instantiate server containers.
        </div>
        <div>●Created reusable components in React.</div>
        <div>
          ●Participated in QA testing before new release versions of software.
        </div>
        <div>
          ●Developed a function to fetch related entities between tables of a
          given database, identifying all foreign keys and extracting results
          into a new schema. Utilized SQL Server Management Studio for test
          table creation and Docker for running tests.
        </div>
      </>
    ),
  },
  {
    id: 2,
    icon: <FaPhotoVideo />,
    title: "Video Editor Intern (January-March 2022)",
    subtitle: "Blowback Productions (New York)",
    duties: "Duties",
    desc: (
      <>
        <div>
          ●Utilized Avid Media Composer to go through raw footages captured for
          films in progress, splicing clips with value into new master reels for
          video editors during post production.
        </div>
        <div>
          ●Reviewed and transcribed audio on company films (both completed and
          in progress) into a Google doc for associate producers.
        </div>
        <div>
          ●Attended weekly company meetings to discuss progress of films in
          production/post production.
        </div>
      </>
    ),
  },
  {
    id: 3,
    icon: <BsFillPeopleFill />,
    title: "Peer Design Consultant",
    subtitle: "Kalamazoo College (Kalamazoo)",
    duties: "Duties",
    desc: (
      <>
        <div>
          ●Collaborated/assisted students and faculty through all stages of the
          design process, including creating and designing graphic designs for
          websites, presentations, posters, flyers, illustrations, and
          photographs.
        </div>
        <div>
          ●Utilized InDesign, Photoshop, and Adobe Illustrator to complete
          graphic designs.
        </div>
        <div>
          ●Answered any questions students and faculty had related to graphic
          designing or about the software used in the Media center.
        </div>
        <div>
          ●Assisted students and faculty with printing designs or photos on
          canon inkjet printer and printing 3D designs on 3D printer.
        </div>
      </>
    ),
  },
  {
    id: 4,
    icon: <GiSoccerBall />,
    title: "Soccer Club President",
    subtitle: "Kalamazoo College (Kalamazoo)",
    duties: "Duties",
    desc: (
      <>
        <div>
          ●Established club and organized leadership with board and officers.
        </div>
        <div>
          ●Developed budget plan for the club each term and presented to Student
          Funding Board.
        </div>
        <div>
          ●Oversaw disbursement of funds for equipment, med packs, and club
          events.
        </div>
        <div>
          ●Coordinated gym and field reservations in collaboration with
          basketball and baseball coaches.
        </div>
        <div>
          ●Established email list of +100 members and oversaw communication to
          current members and interested students.
        </div>
        <div>
          ●Oversaw instagram account and created posters, digital media, and
          various forms of promotion for the club and its events.
        </div>
        <div>
          ●Founder of the Kalamazoo College Campus Cup event, clocking in +130
          attendees its first year.
        </div>
      </>
    ),
  },
];

export default data;
