import React, { Component, useState } from 'react'
import Footer from './Footer';
import JsonData from '../MOCK_DATA.json';



const Title = () => {
    return (
        <div className="title">
            <h2>Gluten-Free Almond Cake with Berries</h2>
            <img src="https://themes.pixelwars.org/lahanna/demo-01/wp-content/uploads/sites/2/2018/07/10-2-1060x1596.jpg" alt="Gluten" />
        </div>
    )
}

const Author = () => {
    return (
        <div className="author">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <img src="https://secure.gravatar.com/avatar/fad9d925ef398e527b220e07a08de80e?s=96&d=mm&r=g" alt="hanna" />
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h6>Author</h6>
                    <p>Hanna Barbara</p>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h6>CATEGORY</h6>
                    <button>Cakes</button>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h6>DIFFICULTY</h6>
                    <h5>Beginner</h5>
                </div>
            </div>
        </div>
    )
}

const Lists = (props) => {
    return (
        <li>{props.title}</li>
    )
}

const Ingredients = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="ingredients">
                    <h2 className="titleh">Ingredients:</h2>
                    <ol>
                        <Lists title="1 pt ramen noodles" />
                        <Lists title="¼ cup sliced almonds" />
                        <Lists title="¼ cup sunflower seeds" />
                        <Lists title="1 oz romaine lettuce" />
                        <Lists title="1 cup grated parmesan" />
                    </ol>
                </div>
            </div>

            <div className="col-md-6 col-sm-12 times">
                <div className="row py-4">
                    <div className="col-md-4 col-sm-4">
                        <h6>Prep Time </h6>
                        <p><i class="far fa-clock"></i> 15 mins </p>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h6>Cook Time</h6>
                        <p><i class="far fa-clock"></i> 25 mins</p>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h6>Total time</h6>
                        <p><i class="far fa-clock"></i> 40 mins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Forcake = () => {
    return (
        <div className="forcake">
            <h2 className="titleh">For Cake:</h2>
            <div className="cake">
                <ul>
                    <Lists title="Preheat oven to 350°F for  5 Minutes. Butter three 9-inch-diameter cake pans with 1 1/2-inch-high sides. Line bottom of pans with parchment paper. Combine 1/3 cup flour and next 3 ingredients in processor. Process until nuts are finely chopped. Whisk remaining 2 cups flour, cinnamon, baking powder, salt, and baking soda in medium bowl to blend." />
                    <Lists title="Using electric mixer, beat sugar and oil in large bowl to blend. Add eggs 1 at a time for  15 Minutes, beating well after each addition. Beat in vanilla. Beat in flour-spice mixture. Stir in coconut-macadamia mixture, then carrots and crushed pineapple." />
                    <Lists title="Divide batter among pans. Bake until tester inserted into center of cakes comes out clean, about  30 Minutes. Cool in pans on racks 1 hour. Run knife around edge of pans to loosen cakes. Turn cakes out onto racks; cool completely." />
                    <Lists title="Beat cream cheese and butter in large bowl until smooth. Beat in powdered sugar, then cream of coconut and both extracts. Chill until firm enough to spread, about" />
                    <Lists title="Place 1 cake layer, flat side up, on platter. Spread 3/4 cup frosting over top of cake. Top with second cake layer, flat side up. Spread 3/4 cup frosting over. Top with third cake layer, rounded side up, pressing slightly to adhere. Spread thin layer of frosting over top and sides of cake. Chill cake and remaining frosting 30 minutes. Spread remaining frosting over top and sides of cake. Arrange whole nuts and ginger around top edge of cake. Chill  40 Minutes. (Can be made 1 day ahead. Cover with cake dome and chill. Let stand at room temperature 1 hour before serving." />
                </ul>
            </div>
        </div>
    )
}

const Comments = () => {
    return (
        <div className="comments">
            <h2 className="titleh">Comments:</h2>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="Comment" id="" placeholder="Comment..."></textarea>
            </form>
            <button>Post comment</button>
        </div>

    )
}

const ReceiptLeft = () => {
    return (
        <div className="receiptleft">
            <Title />
            <Author />
            <Ingredients />
            <Forcake />
            <Comments />
        </div>
    )
}

const Popularposts = (props) => {
    return (
        <div className="popularpost">
            <div className="row">
                <div className="col-md-4">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="col-md-8">
                    <h6>{props.name}</h6>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

const ReceiptRight = () => {
    const [users] = useState(JsonData.slice(0, 30));

    return (
        <div className="receiptright">
            <h4>Popular posts</h4>
            <span></span>
            <div className="posts">
                {users.map((item, index) => {
                    if (index < 4)
                        return (
                            <Popularposts name={item.title}
                                date={item.date}
                                img={item.photo}
                                item={item}
                                key={index}
                            />
                        )
                })}
            </div>
        </div>
    )
}


const ReceiptContainer = () => {
    return (
        <div className="receiptcontainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <ReceiptLeft />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <ReceiptRight />
                    </div>
                </div>
            </div>
        </div>
    )
}


class Receipt extends Component {
    render() {
        return (
            <div className="pages receipt">
                <ReceiptContainer />
                <Footer />
            </div>
        )
    }
}

export default Receipt
