<?php

namespace lgxenos\yii2\multipleSelector;

use yii\helpers\Html;
use yii\widgets\InputWidget;

class MultipleSelector extends InputWidget {

	public $items;

	public $size = 7;

	public $multiple = true;

	public $jsSelectClass = 'js_MultipleDropDownList';

	public function run() {
		if (!array_key_exists('class', $this->options)) {
			$this->options['class'] = 'form-control';
		}
		$this->options['class'] .= ' ' . $this->jsSelectClass;
		$this->options['multiple'] = $this->multiple;
		$this->options['size']     = $this->size;
		echo Html::activeDropDownList($this->model, $this->attribute, $this->items, $this->options);
		$this->registerClientScript();
	}

	/**
	 *
	 */
	private function registerClientScript() {

		$view = $this->getView();

		MultipleSelectorAsset::register($view);

		$view->registerJs(/** @lang JavaScript */ "

			window.js_MultipleClass = '{$this->jsSelectClass}';
			// навешиваем слушателей
			addListenersToDropdownLists();
			
		", \common\components\view\View::POS_READY);
	}
}
