* {
    box- sizing: border - box;
padding: 0;
margin: 0;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #537895;
    background-image: linear - gradient(315deg, #537895 0 %, #09203f 74 %);
}

.flip-card {
    position: relative;
    color: rgb(27, 27, 27);
    width: 20rem;
    perspective: 1000px;
    font-size: 12px;
    aspect-ratio: 2/3;
}

.flip-card-inner {
    width: 100 %;
    height: 100 %;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    background: linear - gradient(white, white) padding - box,
    linear-gradient(135deg, rgb(79, 79, 250), rgb(255, 51, 51)) border-box;
    border-radius: 15px;
    border: 4px solid transparent;
    /* box-shadow: inset 0 0 50px red, inset 20px 0 80px red, inset -20px 0 80px blue,
      inset 20px 0 300px red, inset -20px 0 300px blue, 0 0 50px darkslategray,
      -10px 0 80px red, 10px 0 80px blue; */
}

.card-image {
    object-fit: cover;
    width: 100 %;
    height: 100 %;
}

.name-container {
    position: absolute;
    width: 100 %;
    bottom: 0;
    z - index: 1;
    display: flex;
    justify - content: center;
    padding: 1rem;
}

.name {
    color: white;
    background - color: rgb(24, 30, 30);
    padding: 0.25rem 0.5rem;
    border - radius: 5px;
    font - size: xx - large;
    font - family: Verdana, Geneva, Tahoma, sans - serif;
}

.isFlipped {
    transform: rotateY(180deg);
}

.flip - card - front,
.flip - card - back {
    border - radius: 10px;
    overflow: hidden;
    position: absolute;
    width: 100 %;
    height: 100 %;
    -webkit - backface - visibility: hidden;
    backface - visibility: hidden;
    background - color: black;
}

.flip - card - front {
    color: black;
    background: dodgerblue;
}

.flip - card - back {
    transform: rotateY(180deg);
    background: red;
}
