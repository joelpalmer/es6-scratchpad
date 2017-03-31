// From: https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
// Safely Accessing Deeply Nested Values In JavaScript
// Many Ways To Safely Access Nested Data.
const R = require('ramda');
const Maybe = require('data.maybe');
const props = {
    user: {
        posts: [
            { title: 'Foo', comments: [ 'Good one!', 'Interesting...']},
            { title: 'Bar', comments: [ 'OK']},
            { title: 'Baz', comments: []},
        ]
    }
}

//access deeply nested values & make sure a key or index exists before we try to access it
//troublesome to check level for level & we could not build on it to walk different levels
//too explicit
props.user &&
props.user.posts &&
props.user.posts[0] &&
props.user.posts[0].comments &&
props.user.posts[0].comments[0]

//solutions better than explicitly walking the levels 

//**Barebones JavaScript**

const get = p => o =>
    p.reduce((xs, x) => (xs && xs[x]) ? xs[x]: null, o)

//pass in our props object
// console.log(get(['user', 'posts', 0, 'comments'], props))
// console.log(get(['user', 'post', 0, 'comments'], props))

//const getUserComments = get(['user', 'posts', 0, 'comments'])

// console.log(getUserComments(props))
// console.log(getUserComments({user: {posts: []}}))

//**Ramda **

// const getUserComments = R.pathOr([], ['user', 'posts', 0, 'comments'])

// console.log(getUserComments(props))
// console.log(getUserComments({}))

//*Ramda + Folktale -data.maybe*

const getPath = R.compose(Maybe.fromNullable, R.path)
const userComments = getPath(['user', 'posts', 8, 'comments'], props)

//console.log(userComments)
//console.log(userComments.map(x => x.join(',')).toString())

//composeK to access a deeply nested value
// const getProp = R.curry((name, obj) =>
//     Maybe.fromNullable(R.prop(name, obj)))

// const findUserComments = R.composeK(
//     getProp('comments'),
//     getProp(0),
//     getProp('posts'),
//     getProp('user')
// )

// console.log(findUserComments(props).toString())
// console.log(findUserComments({}).toString())

//* using compose and chain *

// const getProp = R.curry((name, obj) =>
//     Maybe.fromNullable(R.prop(name, obj)))

// const findUserComments = 
//     R.compose(
//         R.chain(getProp('comments')),
//         R.chain(getProp(0)),
//         R.chain(getProp('posts')),
//         getProp('user')
//     )
// console.log(findUserComments(props).toString())
// console.log(findUserComments({}).toString())

//Notes: Returns the left-to-right - pipeK
//composeK return right-to-left

//*lenses*

const findUserComments = R.lensPath(['user', 'posts', 0, 'comments'])
console.log(R.view(findUserComments, props))




