import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Time = ()=>{
    return (
        <VerticalTimeline lineColor={"#593089"}>
            <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ color: '#B200CF', background: "#FFF", border: "2px solid #593089" }}
                contentArrowStyle={{ borderRight: '25px solid #593089' }}
                date="DAY 1, Thurs, Sept 1st"
                dateClassName='text-[#593089]'
                iconStyle={{background: "#593089", scale:"50%"}}
            >
            <h3 className="vertical-timeline-element-title text-2xl">Round 1</h3>
            <h4 className="vertical-timeline-element-subtitle text-xl">Competitive Coding</h4>
            <ul>
                <li><p className='text-2xl'>1300 hrs<br></br> Two Hour Coding Challenge Begins </p></li>
            </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ color: '#B200CF', background: "#FFF", border: "2px solid #593089" }}
                contentArrowStyle={{ borderRight: '25px solid #593089' }}
                date="DAY 2, Sat, Sept 3rd"
                dateClassName='text-[#593089]'
                iconStyle={{background: "#593089", scale:"50%"}}
            >
            <h3 className="vertical-timeline-element-title text-2xl">Round 2</h3>
            <h4 className="vertical-timeline-element-subtitle text-xl">Project Building</h4>
            <p className='text-2xl'>0900 hrs <br></br> The Hackathon Begins</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ color: '#B200CF', background: "#FFF", border: "2px solid #593089" }}
                contentArrowStyle={{ borderRight: '25px solid #593089' }}
                date="DAY 3, Sat, Sept 3rd"
                dateClassName='text-[#593089]'
                iconStyle={{background: "#593089", scale:"50%"}}
            >
            <h3 className="vertical-timeline-element-title text-2xl">Round 3</h3>
            <h4 className="vertical-timeline-element-subtitle text-xl">Presentation</h4>
            <ul>
                <li><p className='text-2xl'>1200 hrs<br></br> The Hackathon Ends</p></li>
                <li><p className='text-2xl'>1300 hrs <br></br> The Results for the 2nd round will go up on the website and the participants will also receive a mail</p></li>
                <li><p className='text-2xl'>1400 hrs<br></br> The Finals will occur on 4th Sept, where the participants will have to illustrate their project via a presentation.</p></li>
            </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
export default Time