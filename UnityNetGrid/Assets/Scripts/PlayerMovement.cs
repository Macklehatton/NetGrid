﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Mirror;

public class PlayerMovement : NetworkBehaviour
{
    [SerializeField]
    private float movementScale;
    [SerializeField]
    private float holdDelay;

    private float timeSincePress;

    private void Start()
    {
        if (IsLocalPlayer == false)
        {
            Camera camera = GetComponentInChildren<Camera>();

            if (camera != null)
            {
                camera.gameObject.SetActive(false);
            }
            return;
        }
    }

    private void Update()
    {
        if (IsLocalPlayer == false)
        {
            return;
        }

        timeSincePress += Time.deltaTime;

        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");

        Vector3 movementVector = new Vector3(moveX, 0.0f, moveY);

        if (timeSincePress > holdDelay)
        {
            if (movementVector != Vector3.zero)
            {
                transform.position += movementVector * movementScale;
                timeSincePress = 0.0f;
            }
        }
    }    
}
