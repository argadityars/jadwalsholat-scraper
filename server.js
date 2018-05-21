var colors = require('colors');
var request = require('request');
var cheerio = require('cheerio');

url = 'http://jadwalsholat.pkpu.or.id/?id=233';

request(url, function(error, response, html) {
    if (error && response.statusCode !== 200) throw err;

    var $ = cheerio.load(html);

    $('table.table_adzan tr[align=center]').each((i, value) => {
        $(value).find('td').each((j, data) => {
            if ($(value).attr('class') === 'table_highlight')
                return process.stdout.write($(data).text().red + '\t');
            return process.stdout.write($(data).text() + '\t');
        });
        process.stdout.write('\n');
    });
})