<html>
<head>
<title>ezlng statistic</title>
</head>
<body>
<?php
$token="qrnwp746fgjcj4jfd337";
$body="";
$opts = array('http' =>
array(
'method' => 'GET',
'header' => "Content-Type: application/json\r\n".
"Authorization: Bearer ".$token."\r\n",
'content' => $body,
'timeout' => 60
)
);
$https_server="ci.appveyor.com/api/projects";
$context = stream_context_create($opts);
$url = 'https://'.$https_server;
$result = file_get_contents($url, false, $context, -1, 40000);
$arr=explode(',',$result);
$builds=explode(':',$arr[5]);
echo "Builds : ".$builds[1].'</br>';
$version=explode(":",$arr[6]);
echo "Version : ".trim($version[1],'"').'</br>';
?>
</body>
</html>
