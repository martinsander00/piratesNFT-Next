import Image from 'next/image';


const GeneralCard = ({
                      typ,              // Card type
                      title,            // Card title
                      subtitle,         // Card subtitle
                      text,             // Card text
                      image,            // Card image
                      imageAlt,         // Card image alternative text
                      cardClass,        // Card Class for styling
                      imgClass,         // image Class for styling
                      titleClass,       // title Class for styling
                      subtitleClass,    // subtitle Class for styling
                      textClass,         // text Class for styling
                      }) =>{

    console.log(image);
	return(
	<div className={cardClass}>
        {typ == "team" &&<img src={image} className={"card-img-top " + imgClass} />} 
		{typ == "pirateCode" && <img src={"/pirateCode/img/" + image} className={"card-img-top " + imgClass} />}
		<div className="card-body">
			<h3 className={"card-title " + titleClass}>{title}</h3>
			<h4 className={"card-subtitle " + subtitleClass}>{subtitle}</h4>
			<p className={"card-text " + textClass}>{text}</p>
		</div>
	</div>

	);
}
export default GeneralCard;