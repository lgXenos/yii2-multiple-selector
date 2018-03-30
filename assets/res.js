/** @namespace window.js_MultipleClass */

function addListenersToDropdownLists(asd) {

	var multiDetected = 'js_multiDetectedYes';

	// берем все списики на странице
	$('.' + window.js_MultipleClass).each(function (index) {
		var wrapHeader, currObj, newClass;
		currObj = $(this);
		newClass = 'js_' + currObj.attr('id');
		wrapHeader = $('<div>', {class: 'panel panel-default'}).html('<div class="panel-body ' + newClass + '"></div>');

		// если уже есть слушатель - пропускаем
		if (currObj.hasClass(multiDetected)) {
			console.log('doubled');
			return;
		}

		// ставим перед ним пустой блок с выбранными элементами
		currObj.after(wrapHeader.clone());

		// на каждый элемент вешаем слушателя на событие изменения
		currObj.on('change', function (e) {
			var self, objs, text;
			self = $(this);
			text = '<i>Щелкните на строчку мышью для выбора</i>';
			objs = self.find("option:selected");

			// если есть выбранные обьекты - заполняем ими контейнер. иначе - выводим что кликните куда-нибудь
			if (objs.length) {
				text = [];
				objs.each(function (index) {
					// берем текст селекта и убираем все, что в квадратных скобках
					text.push('<span class="multipleCheckbox">'+ $(this).text().replace(/\[[\s\S]*\]/, '') + '</span>');
				});
				$('.' + newClass).html(text.join(' '));
			}
		});

		// тригерим изменялку для пересчитывания выбранных и помечаем что уже с добавленным слушателем
		currObj.trigger('change');
		currObj.addClass(multiDetected);
	});
}
