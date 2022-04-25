function FlowerMeadow({ flowers }) {

    const flowerStyle = (positionX, positionY, height) => ({
        position: `absolute`,
        left: positionX + "%",
        top: positionY + "%",
        height: height,
    });

    return (
        <div className="flower-meadow">
            <div>
                {flowers.map((flower) => {
                    return (
                        <img
                            src={flower.asset}
                            key={flower.key}
                            style={flowerStyle(
                                flower.positionX,
                                flower.positionY,
                                flower.height
                            )}
                            alt="A flower"
                        />
                    )
                })}</div>
        </div>
    );
}

export default FlowerMeadow;