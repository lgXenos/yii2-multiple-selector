<?php

namespace lgxenos\yii2\multipleSelector;

use yii\web\AssetBundle;

class MultipleSelectorAsset extends AssetBundle {

	public $sourcePath = '@vendor/lg-xenos/yii2-multiple-selector/assets';

	public $js = [
		'res.js',
	];

	public $css = [
		'res.css'
	];

	public $depends = [
		'yii\web\JqueryAsset',
	];

}
