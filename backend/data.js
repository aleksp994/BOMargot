import bcrypt from 'bcryptjs'

const data={
    users:[{
        name: 'Aleks',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin:true
    },
    {
        name: 'Ana',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false
    },

],
    products: [
        {
            // _id: '1',
            name:'Asymetric lavander top',
            slug:'asymetric-lavander-top',
            category:'Tops',
            image: '/images/asymetric top.jpg',
            price:16,
            countInStock: 25,
            numReviews: 10,
            description: 'light-weight top'
        },
        {
            // _id: '2',
            name:'Asymetric brown and bordeaux top',
            slug:'asymetric-brown-and-bordeaux-top',
            category:'Tops',
            image: '/images/kategorija - top asim braon i bordo.jpg',
            price:16,
            countInStock: 0,
            numReviews: 10,
            description: 'light-weight top'
        },
        {
            // _id: '3',
            name:'Long sleve lavander top',
            slug:'long-sleve-lavander-top',
            category:'Tops',
            image: '/images/top rukavi lavanda.jpg',
            price:21,
            countInStock: 20,
            numReviews: 10,
            description: 'light-weight top'
        },
        {
            // _id: '4',
            name:'Long sleve brown top',
            slug:'long-sleve-brown-top',
            category:'Tops',
            image: '/images/top rukavi braon.jpg',
            price:21,
            countInStock: 20,
            numReviews: 10,
            description: 'light-weight top'
        },
        {
            // _id: '5',
            name:'Long sleve bordeaux top',
            slug:'long-sleve-bordeaux-top',
            category:'Tops',
            image: '/images/top rukavi bordo.jpg',
            price:21,
            countInStock: 20,
            numReviews: 10,
            description: 'light-weight top'
        },
        {
            // _id: '6',
            name:'Lavander leggings',
            slug:'lavander-leggings',
            category:'Bottoms',
            image: '/images/bottom helanke lavanda.jpg',
            price:25,
            countInStock: 22,
            numReviews: 10,
            description: 'comfy leggings'
        },

        {
            // _id: '7',
            name:'Brown leggings',
            slug:'brown-leggings',
            category:'Bottoms',
            image: '/images/bottom helanke braon.jpg',
            price:25,
            countInStock: 22,
            numReviews: 10,
            description: 'comfy leggings'
        },
        {
            // _id: '8',
            name:'Lavander bicycle shorts',
            slug:'lavander-bicycle-shotrts',
            category:'Bottoms',
            image: '/images/bottom bicikl lavanda.jpg',
            price:23,
            countInStock: 19,
            numReviews: 7,
            description: 'comfy light-weight shorts'
        },

        {
            // _id: '9',
            name:'Brown bicycle shorts',
            slug:'brown-bicycle-shotrts',
            category:'Bottoms',
            image: '/images/bottom bicikl braon.jpg',
            price:23,
            countInStock: 19,
            numReviews: 7,
            description: 'comfy light-weight shorts'
        },
        {
            // _id: '10',
            name:'Bordeaux bicycle shorts',
            slug:'bordeaux-bicycle-shotrts',
            category:'Bottoms',
            image: '/images/bottom bicikl bordo.jpg',
            price:23,
            countInStock: 19,
            numReviews: 7,
            description: 'comfy light-weight shorts'
        },
        {
            // _id: '11',
            name:'Lavander underpants',
            slug:'lavander-underpants',
            category:'Bottoms',
            image: '/images/bottom gace  lavanda.jpg',
            price:5,
            countInStock: 30,
            numReviews: 7,
            description: 'strechy underpants'
        },

        {
            // _id: '12',
            name:'Brown and bordeaux underpants',
            slug:'brown-and-bordeaux-underpants',
            category:'Bottoms',
            image: '/images/bottom gace braon i bordo.jpg',
            price:5,
            countInStock: 30,
            numReviews: 7,
            description: 'strechy underpants'
        },
    ],
};

export default data;