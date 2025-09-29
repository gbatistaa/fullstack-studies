<?php

$users = ["admin" => "senhaadmin", "gabriel" => "senhagabriel", "samara" => "senhasamara", "roberta" => "senhabetinha"];

var_dump($users);

function login($username, $password, $users)
{
  // Error treatment:
  if (!array_key_exists($username, $users)) {
    print "The user $username doesn't exist on the databse\n";
    return false;
  }
  if (!$users[$username] === $password) {
    print "The password of $username is wrong\n";
    return false;
  }

  // Function core:
  switch ($username) {
    case 'admin':
      print "THE ADM IS HHEEEREEE!!\n";
      break;

    default:
      print "Welcome $username!\n";
      break;
  }
}

login("admin", "admin", $users);
