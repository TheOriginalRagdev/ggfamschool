'use strict';

const axios = require('axios');
const each = require('foreach');

var serverConfiguration = {
	base: 'https://fortnite-api.theapinetwork.com',
	resolve: null
}

var configuration = {
	key: null,
}

var fortnite = {};

fortnite.configuration = function(data) {
	each(data, function(value, key) {
		configuration[key] = value;
	});
}


/*/
		ITEMS FUNCTIONS		-- 		FORTNITE INGAME ITEMS
																/*/
fortnite.getShop = async function(language = 'en') {
	return await this.getStore(language);
}

fortnite.getStore = async function(language = 'en') {
	return await httpRequest('store/get', [
		[	{	'language': language	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getUpcoming = async function() {
	return await httpRequest('upcoming/get').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getItem = async function(id = '') {
	return await httpRequest('item/get', [
		[	{	'id': id	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getItemsList = async function() {
	return await httpRequest('items/list').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getPopularItems = async function() {
	return await httpRequest('items/popular').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getRandomItems = async function() {
	return await httpRequest('items/random').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

/*/
		NEWS FUNCTIONS		-- 		FORTNITE INGAME NEWS
																/*/
fortnite.getNews = async function(type = 'br') {
	return await httpRequest(type + '_motd/get').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

/*/
		CREATIVE FUNCTIONS		-- 		FORTNITE CREATIVE
																/*/
fortnite.getCreativeList = async function(order = 'popular', tag = '', limit = 50) {
	return await httpRequest('creative/list', [
		[	{	'order': order	} ],
		[	{	'tag': tag	} ],
		[	{	'limit': limit	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getCreativeTags = async function() {
	return await httpRequest('creative/tags').then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getCreativeIsland = async function(code = '') {
	return await httpRequest('creative/get', [
		[	{	'id': code	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.fetchCreativeIsland = async function(code = '') {
	return await httpRequest('creative/fetch', [
		[	{	'id': code	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.addCreativeIsland = async function(code = '') {
	return await httpRequest('creative/add', [
		[	{	'id': code	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.creativeSearch = async function(query = '') {
	return await httpRequest('creative/search', [
		[	{	'query': query	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

/*/
		USERS FUNCTIONS		-- 		FORTNITE USERS
																/*/
fortnite.searchUserId = async function(username = '') {
	return await httpRequest('users/id', [
		[	{	'username': username	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getUserStatsV2 = async function(user_id = '') {
	return await httpRequest('users/public/br_stats_v2', [
		[	{	'user_id': user_id	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

fortnite.getUserStatsV1 = async function(user_id = '', platform = '') {
	return await httpRequest('users/public/br_stats', [
		[	{	'user_id': user_id	} ],
		[	{	'platform': platform	} ]
	]).then(data => {
		
		if(data.success == undefined || data.success == true) {
			return data;
		}

		return data;

	});
}

/*/
							FUNCTIONS
																/*/
async function httpRequest(path, query = []) {
	query.push([{
		'authorization': (configuration['key'] == undefined ? '' : configuration['key'])
	}]);

	return await axios.get(serverConfiguration['base'] + '/' + path + '?' + join(query))
	.then(function (response) {
		return response.data;
	})
	.catch(function (error) {
		return error.response.data;
	});
}

function join(query) {
	// messy, will update this later.

	var output = '';

	each(query, function(object) {
		var key = Object.keys(object[0])[0];
		var value = object[0][key];

		output += key + '=' + value + '&';
	});

	return output;
}

module.exports = fortnite;
