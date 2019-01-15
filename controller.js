'use strict';

const response = require('./response');
const connection = require('./conn');

exports.tabungan = (req, res) => {
	connection.query('SELECT * FROM buku_tabungan', (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.findTabungan = (req, res) => {
	const id = req.params.id;
	connection.query('SELECT * FROM buku_tabungan WHERE id = ?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.createTabungan = (req, res) => {
	const noRekening 	= req.body.no_rekening;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const noTelepon 	= req.body.no_telepon;

	connection.query('INSERT INTO buku_tabungan(no_rekening, nama, alamat, no_telepon) VALUES(?, ?, ?, ?)', [noRekening, nama, alamat, noTelepon], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menambahkan data buku tabungan', res);
		}
	});
};

exports.updateTabungan = (req, res) => {
	const id 			= req.body.id;
	const noRekening 	= req.body.no_rekening;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const noTelepon 	= req.body.no_telepon;

	connection.query('UPDATE buku_tabungan SET no_rekening=?, nama=?, alamat=?, no_telepon=? WHERE id=?', [noRekening, nama, alamat, noTelepon, id], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil mengubah data buku tabungan', res);
		}
	});
};

exports.deleteTabungan = (req, res) => {
	const id = req.body.id;
	connection.query('DELETE FROM buku_tabungan WHERE id=?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menghapus data buku tabungan', res);
		}
	});
};

exports.index = (req, res) => {
	response.ok('Index of CodeID Rest API', res);
};