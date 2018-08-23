<?php
	//对颜色的随机选择处理
	// $colors = array("#360","#f30","#06c");
	// $key = array_rand($colors);
	// $color = $colors[$key];

	//事件信息数组
	// $id = $_POST["id"];
	$start = trim($_POST["sdate"]);
	$end = trim($_POST["edate"]);
	$starttime = trim($_POST["stime"]);
	$endtime = trim($_POST["etime"]);
	$allDay = $_POST["allDay"]=="1"?true:false;
	$passornot = trim($_POST["passornot"]);
	// "#366cd2",blue,等待
	// "#23b162",green,通过
	// "#fb1616",red,失败
	$colors = array("#366cd2","#23b162","#fb1616");
	// $status = array("等待","通过","失败");

	$arr = array(
		// "id" => $_POST["id"];
		// "title" => " (等待中 )".$_POST['title'],
		"title" => $_POST["title"],
		// "start" => date("Y-m-d H:i",strtotime($start.' '.$starttime),//strtotime将字符串表达的时间转换成时间戳，解决直接采集的时间偏前一天的问题
		"start" => date("Y-m-d",strtotime($start))." ".date("H:i",strtotime($starttime)),
		"end"   => date("Y-m-d",strtotime($end))." ".date("H:i",strtotime($endtime)),
		// "end"   => date("Y-m-d H:i",strtotime($end.' '.$endtime),
		"allDay" => $allDay, 
		"color" => $colors[0],
		// "color" => "#f00",
	);
   
	switch($passornot)
    {
        case "pass":
           
            $arr = array(
				// "id" => $_POST["id"];
				// "title" => "( 通过 )".$_POST['title'],
				"title" => $_POST['title'],
                "start" => date("Y-m-d",strtotime($start)).' '.date("H:i",strtotime($starttime)),
				"end"   => date("Y-m-d",strtotime($end)).' '.date("H:i",strtotime($endtime)),
                "allDay"=> $allDay,
				"color" => $colors[1],
				// "color" => "#0f0",
            );
            break;

        case "failed":
            
            $arr = array(
				// "id" => $_POST["id"];
				// "title" => "( 失败 )".$_POST['title'],
				"title" => $_POST['title'],
                "start" => date("Y-m-d",strtotime($start)).' '.date("H:i",strtotime($starttime)),
				"end"   => date("Y-m-d",strtotime($end)).' '.date("H:i",strtotime($endtime)),
                "allDay"=> $allDay,
				"color" => $colors[2],
				// "color" => "#00f",
            );
            break;
    }

	echo json_encode($arr);
?>
